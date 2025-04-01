#!/bin/zsh
set -e

# Configuration
REPO_NAME=$(basename -s .git "$(git config --get remote.origin.url)")
BRANCH="gh-pages"
WORKTREE_DIR="../${REPO_NAME}-${BRANCH}"
BUILD_DIR="book"
COMMIT_MSG="Clean deploy on $(date +%F)"

echo "🛠  Building the book..."
mdbook build

echo "🧼  Cleaning .DS_Store and .obsidian from build output..."
# Clean .DS_Store and .obsidian from build dir before deploy
fd .DS_Store "$BUILD_DIR" -H -t f -X rm -f
fd .obsidian "$BUILD_DIR" -H -t d -x rm -rf {}

echo "🌿  Setting up worktree at $WORKTREE_DIR..."
git worktree remove "$WORKTREE_DIR" --force 2>/dev/null || true
git worktree add "$WORKTREE_DIR" "$BRANCH"

echo "📦  Syncing book/ to $WORKTREE_DIR/..."
rm -rf "$WORKTREE_DIR"/*
cp -r "$BUILD_DIR"/* "$WORKTREE_DIR/"

cd "$WORKTREE_DIR"

echo "🧹  Removing tracked .DS_Store and .obsidian files from git index..."
# Clean up any tracked junk that still exists in gh-pages
fd .DS_Store -H -t f -X git rm --cached --ignore-unmatch
fd .obsidian -H -t d -x git rm -r --cached --ignore-unmatch {}

echo "➕  Staging and committing..."
git add -A
git commit -m "$COMMIT_MSG" || echo "⚠️  Nothing to commit."

echo "🚀  Pushing to $BRANCH..."
git push origin "$BRANCH" -f


cd -
git worktree remove "$WORKTREE_DIR"

echo "✅  Deployment complete."

