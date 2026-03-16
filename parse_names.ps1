[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$j = Get-Content figma_page_frames.json -Raw -Encoding UTF8 | ConvertFrom-Json
$ch = $j.nodes.'4941:971'.document.children
foreach($c in $ch){
  $w = [int]$c.absoluteBoundingBox.width
  $h = [int]$c.absoluteBoundingBox.height
  if ($w -eq 1336 -or $w -eq 375 -or $w -eq 376) {
    $type = if ($w -eq 1336) { "DESKTOP" } else { "MOBILE" }
    [System.Console]::WriteLine("$type | $($c.id) | $($c.name) | ${w}x${h}")
  }
}
