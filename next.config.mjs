import createMdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js','jsx','md','mdx','ts','tsx'],
};

const withMDX = createMdx({})


export default withMDX(nextConfig);
