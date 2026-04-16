param(
  [int]$Port = 5500
)

Set-Location -LiteralPath $PSScriptRoot

$py = Get-Command py -ErrorAction SilentlyContinue
$python = Get-Command python -ErrorAction SilentlyContinue

if ($py) {
  & py -m http.server $Port
  exit $LASTEXITCODE
}

if ($python) {
  & python -m http.server $Port
  exit $LASTEXITCODE
}

Write-Error "Python nao foi encontrado. Instale Python ou execute a vitrine com outro servidor local."
exit 1
