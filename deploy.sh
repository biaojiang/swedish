#!/bin/zsh
set -e

# Infer repo name from git
REPO_NAME=$(basename -s .git "$(git config --get remote.origin.url)")
BRANCH="gh-pages"
WORKTREE_DIR="../${REPO_NAME}-${BRANCH}"
BUILD_DIR="book"
COMMIT_MSG="Deploy site on $(date +%F)"

echo "🛠  Building the book..."
mdbook build

echo "🧼  Cleaning .DS_Store and .obsidian files..."
# Clean .DS_Store files (faster)
fd .DS_Store book/ -H -t f -I -X rm -f

# Clean .obsidian directories (safer)
fd .obsidian book/ -H -t d -I -x rm -rf {}

echo "🌿  Setting up worktree at $WORKTREE_DIR..."
git worktree remove "$WORKTREE_DIR" --force 2>/dev/null || true
git worktree add "$WORKTREE_DIR" "$BRANCH"

echo "📦  Syncing book/ to $WORKTREE_DIR/..."
rm -rf "$WORKTREE_DIR"/*
cp -r "$BUILD_DIR"/* "$WORKTREE_DIR/"

cd "$WORKTREE_DIR"
echo "🧼  Untracking previously committed .DS_Store and .obsidian files..."
git ls-files | grep -E '\.DS_Store|\.obsidian' | xargs git rm --cached --ignore-unmatch || true

git add -A

if git diff --cached --quiet; then
    echo "✅  No changes to deploy."
else
    echo "🚀  Committing and pushing to $BRANCH..."
    git commit -m "$COMMIT_MSG"
    git push origin "$BRANCH"
fi

cd -
git worktree remove "$WORKTREE_DIR"

echo "✅  Deployment complete."

