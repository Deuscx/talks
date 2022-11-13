function exportPdf(){
    for file in  ./pages/*.md ; do
      filename=`basename $file .md`
      echo $filename
      npx slidev export ./pages/${filename}.md --output ./pdf/${filename}.pdf --timeout 1000000
    done;
}