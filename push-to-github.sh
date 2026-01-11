#!/bin/bash
# Deploy script for ATEX website

echo "================================================"
echo "  PUSH TO GITHUB & DEPLOY TO VPS"
echo "================================================"
echo ""

# Check if GitHub remote exists
if git remote get-url origin &>/dev/null; then
    echo "GitHub remote already exists. Pushing to GitHub..."
    git push origin main
else
    echo "GitHub remote not configured."
    echo "Please create a repository at: https://github.com/new"
    echo "  - Name: atex-website"
    echo "  - Public: Yes"
    echo "  - No README (we have one already)"
    echo ""
    echo "Then run:"
    echo "  git remote add origin https://github.com/MakAkasha/atex-website.git"
    echo "  git push -u origin main"
fi

echo ""
echo "================================================"
echo "  DEPLOY TO VPS"
echo "================================================"
echo ""

# Deploy to VPS
echo "Cloning to VPS and deploying..."
ssh root@147.93.63.226 << 'EOF'
cd /root
if [ -d "atex-app" ]; then
    echo "Pulling latest changes..."
    cd atex-app
    git pull
    npm install
    npm run build
    pm2 restart atex-app
else
    echo "Cloning repository..."
    git clone https://github.com/MakAkasha/atex-website.git atex-app
    cd atex-app
    npm install
    npm run build
    pm2 start npm --name "atex-app" -- start
    pm2 save
fi
echo ""
echo "================================================"
echo "  Deployment Complete!"
echo "================================================"
echo "Visit: https://site.atex-ksa.com"
EOF