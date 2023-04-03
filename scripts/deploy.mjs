#!/usr/bin/env zx
import path from 'path'
import fs from 'fs-extra'
let slides = await glob(['pages/*.md'])

const slidesName = slides.map(slide => path.basename(slide, '.md'))

const slidesLink = ["\r\n"]
for (let slide of slidesName) {
    console.log(slide)
    slidesLink.push(`- ${slide }: [link](https://deuscx.github.io/talks/${ slide }/)`)
    await $`npm run build -- ./pages/${slide}.md --base /talks/${slide}/ --out ./dist/${slide}`
}
slidesLink.push("\r\n")
console.log('🚀rewrite readme')

function replaceContent (content, marker, chunk) {
    const replaced = content.replace(new RegExp(`<!-- ${marker} starts -->.*<!-- ${marker} ends -->`, 'gs'), `<!-- ${marker} starts -->${chunk}<!-- ${marker} ends -->`)
    return replaced
}

const readmePath = path.join(__dirname, '../README.md')
const content = fs.readFileSync(readmePath, { encoding: 'utf8' });
const rewriteContent = replaceContent(content, "slides", slidesLink.join("\r\n"))
console.log(`rewrite ${readmePath}:`,replaceContent)
fs.writeFileSync(readmePath, rewriteContent)