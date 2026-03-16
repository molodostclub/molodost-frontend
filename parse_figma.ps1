$j = Get-Content figma_page_frames.json -Raw -Encoding UTF8 | ConvertFrom-Json
$ch = $j.nodes.'4941:971'.document.children
foreach($c in $ch){
  $w = [int]$c.absoluteBoundingBox.width
  $h = [int]$c.absoluteBoundingBox.height
  Write-Host "$($c.id) | $($c.name) | ${w}x${h}"
}
