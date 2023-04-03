#!/usr/bin/env zx
import path from 'path'
let slides = await glob(['pages/*.md'])

const slidesName = slides.map(slide => path.basename(slide, '.md'))

for(let slide of slidesName) {
    console.log(slide)
    await $`npm run build -- ./pages/${slide }.md --base /talks/${ slide }/ --out ./dist/${slide}`
}
