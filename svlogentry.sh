#!/bin/zsh

# ======================
# Usage: svlogentry [dn|svt] [--date=YYYY-MM] 
# ======================

if [[ "$1" == "-h" || "$1" == "--help" ]]; then
  echo "Usage: $(basename "$0") [dn|svt] [--date=YYYY-MM]"
  exit 0
fi

# ======================
# Parse arguments
# ======================

SOURCE="$1"
DATE_ARG="$(date +%Y-%m)"  # default to current month

for arg in "$@"; do
  if [[ "$arg" == --date=* ]]; then
    DATE_ARG="${arg#--date=}"
  fi
done

YEAR="${DATE_ARG%-*}"
MONTH="${DATE_ARG#*-}"

# ======================
# Define paths and headers
# ======================

BASE_DIR="/Volumes/Work/Rust/swedish/src/$SOURCE/$YEAR"

# Convert month number to Swedish name with first capitalized letter
MONTH_NAME_SV=$(LC_TIME=sv_SE.UTF-8 date -jf "%Y-%m" "$DATE_ARG" +"%B" 2>/dev/null || LC_TIME=sv_SE.UTF-8 date -d "$DATE_ARG" +"%B")
MONTH_NAME_SV_CAP="${MONTH_NAME_SV:0:1:u}${MONTH_NAME_SV:1}"

SOURCE_LOWER=${SOURCE:l}
case $SOURCE_LOWER in
  dn)
    SOURCE_NAME="Dagens Nyheter"
    SOURCE="dn"
    ;;
  svt)
    SOURCE_NAME="SVT"
    SOURCE="svt"
    ;;
  sd)
    SOURCE_NAME="Svenska Dagbladet"
    SOURCE="sd"
    ;;
  *)
    echo "Unknown source '$SOURCE'. Defaulting to 'misc'."
    SOURCE_NAME="Okänd Källa"
    SOURCE="misc"
    ;;
esac

FILENAME="$SOURCE-$DATE_ARG.md"
FILEPATH="$BASE_DIR/$FILENAME"

TITLE="# ${SOURCE:u} $DATE_ARG"
ORIGIN="Svensk från $SOURCE_NAME, $MONTH_NAME_SV_CAP $YEAR."

# ======================
# Ensure directory and file exist
# ======================

mkdir -p "$BASE_DIR"

if [[ ! -f "$FILEPATH" ]]; then
  cat > "$FILEPATH" <<EOF
$TITLE
$ORIGIN

## Ordförråd

| Ord   | Uttal           | Svensk Definition                                         | Engelsk förklaring                      | Kinesisk förklaring   | Exempel mening                                         |
|-------|-----------------|------------------------------------------------------------|-----------------------------------------|-----------------------|--------------------------------------------------------|

## Fraser och Meningar

| Swedish                                   | English                              |
|-------------------------------------------|---------------------------------------|

## Regler

EOF
  echo "Created $FILEPATH"
else
  echo "File exists: $FILEPATH"
fi

# ======================
# Jump to the end of Ordförråd section
# ======================
LINE=$(grep -n "^## Fraser" "$FILEPATH" | cut -d: -f1)
TARGET_LINE=$((LINE - 2))
nvim +"$TARGET_LINE" "$FILEPATH"
