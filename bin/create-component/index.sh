#!/bin/bash
CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $CWD
DIR="$CWD/../../src/$1/$2"

rm -rf "$DIR"
mkdir "$DIR"
touch "$DIR/$2.js"
touch "$DIR/$2.scss"
touch "$DIR/$2.vue"

echo "export default {
  name: '$2'
}" >> "$DIR/$2.js"

echo "<style src='"./$2.scss"' lang='scss'></style>
<script src='"./$2.js"'></script>
<template>
  <div>
  </div>
</template>
" >> "$DIR/$2.vue"
