import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Scale } from '@unovis/ts'
import { VisXYContainer, VisLine, VisAxis, VisBulletLegend } from '@unovis/react'
import Hero from '../components/ProductLandingPage/Hero/Hero'
import Layout from '@theme/Layout';
import Providers from '../components/ProductLandingPage/Providers/Providers'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import {
    PS_HERO_CONTENT,
    PS_METADATA,
    TERRAFORM_MODULE_CONTENT
} from '../content/index.js';

export default function TerraformStatsPage() {

    const [combined, setCombined] = useState('');

    const stat_urls = [
        "https://api.gitrows.com/@github/migara/stat-dashboard/stats/aws.json",
        "https://api.gitrows.com/@github/migara/stat-dashboard/stats/azure.json",
        "https://api.gitrows.com/@github/migara/stat-dashboard/stats/google.json"
    ]

    // Replace lodash _.keyBy
    const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});


    useEffect(() => {
        (async () => {

            const [aws, azure, gcp] = await Promise.all(
                stat_urls.map((url) => fetch(url).then((res) => res.json()))
            );

            // timestamp indexed
            const _aws = keyBy(aws, "timestamp")
            const _azure = keyBy(azure, "timestamp")
            const _gcp = keyBy(gcp, "timestamp")

            const _timestamps = [...Object.keys(_aws), ...Object.keys(_azure), ...Object.keys(_gcp)]
            const timestamps = _timestamps.filter((item, pos) => _timestamps.indexOf(item) === pos).sort()

            setCombined(timestamps.map(t => {
                return {
                    timestamp: t,
                    aws: _aws[t] !== undefined ? _aws[t].count : null,
                    azure: _azure[t] !== undefined ? _azure[t].count : null,
                    gcp: _gcp[t] !== undefined ? _gcp[t].count : null
                }
            }))

        })()
    }, [])

    const labels = {
        "aws": "AWS",
        "azure": "Azure",
        "gcp": "GCP",
    }

    const legendItems = ['aws', 'azure', 'gcp'].map(csp => ({ name: labels[csp] }))
    const xScale = useMemo(() => Scale.scaleTime(), [])
    const yScale = Scale.scaleLinear()

    return (
        <Layout
            description={PS_METADATA.description}
            title="VM-Series Terraform Module Stats"
        >
            <VisBulletLegend items={legendItems} />
            <VisXYContainer data={combined}
                xScale={xScale}
                yScale={yScale}
            >
                <VisLine
                    x={useCallback(d => +(new Date(d.timestamp)), [])}
                    y={[
                        useCallback((d) => d.aws, []),
                        useCallback((d) => d.azure, []),
                        useCallback((d) => d.gcp, []),
                    ]}
                ></VisLine>
                <VisAxis type="x" tickFormat={Intl.DateTimeFormat().format} ></VisAxis>
                <VisAxis type="y" label="Daily Downloads"></VisAxis>
            </VisXYContainer>
        </Layout>
    );
}
