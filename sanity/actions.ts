import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GerResourcesParams {
    query: string;
    category: string;
    page: string;
}

export const getResourcesPlaylist = async () => {
    // const { query, category, page } = params;

    try {
        const resources = await readClient.fetch(
            groq`*[_type == "resourcePlaylist"]{
            _id,
            title,
            resources[0..6]->{
                title,
                _id,
                downloadLink,
                "image": poster.asset->url,
                views,
                category
            }
        }`
        );
        return resources;
    } catch (error) {
        console.log(error);
    }
};

export const getResources = async (params: GerResourcesParams) => {
    const { query, category, page } = params;

    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page),
            })}{
    title,
    _id,
    downloadLink,
    "image": poster.asset->url,
    views,
    slug,
    category
    }`
        );
        return resources;
    } catch (error) {
        console.log(error);
    }
};