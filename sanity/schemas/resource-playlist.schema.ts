import { validation } from "sanity";

const schema = {
    name: 'resourcePlaylist',
    title: 'Resource Playlist',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
            require
        },
        {
            name: 'resources',
            title: 'Resources',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'resource' }] }],
            validation: (Rule: any) => Rule.required(),
        }
    ]
};

export default schema;