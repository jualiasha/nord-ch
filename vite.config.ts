import rawPlugin from 'vite-raw-plugin';

export default {
    plugins: [
        rawPlugin({fileRegex: /\.md$/}) // Ability to read markdown files.
    ]
}