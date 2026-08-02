# 🍲 كشري هند

## ⚡ خطوات الرفع (كل الملفات في مستوى واحد)

### 1. انقل صورك من الريبو القديم لهنا
المفروض يكونوا في نفس المجلد (مستوى واحد):
- `logo.png`
- `jelly.png`
- `om-ali.png`
- `mahalabia.png`
- `roz-blaban.png`

### 2. انقل ملف النشر
```
mkdir -p .github/workflows
mv deploy.yml .github/workflows/deploy.yml
```

### 3. ارفع على GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/a7medashraftarekh-cpu/Koshari-Hind.git
git push -u origin main --force
```

### 4. فعل GitHub Pages
Settings → Pages → Source → GitHub Actions

---

## 🛠️ التشغيل المحلي
```bash
npm install
npm run dev
```

## 📦 البناء
```bash
npm run build
```
