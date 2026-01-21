# Suggested Commands - EstudIA-Programacion

## Windows Environment
This project is developed on Windows. Git Bash is the default shell.

## Project Navigation
```bash
# List directory contents (prefer Glob tool over ls)
# Use Glob tool with pattern "**/*" for directory listing

# Change directory
cd ruta/a/directorio

# Go to project root
cd F:/EstudIA-Programacion
```

## Git Commands
```bash
# Check status
git status

# Add files
git add archivo.ipynb
git add .

# Commit changes
git commit -m "descripcion del cambio"

# Push to remote
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b nombre-rama

# Switch branch
git checkout nombre-rama
```

## File Operations (Prefer specialized tools)
- **Use Read tool** instead of `cat`
- **Use Write tool** instead of `echo > file`
- **Use Edit tool** instead of `sed/awk`
- **Use Glob tool** instead of `find`
- **Use Grep tool** instead of `grep`

## Testing/Verification
```bash
# For Python notebooks: Manual verification in Google Colab
# 1. Open notebook in Colab
# 2. Run all cells (Runtime > Run all)
# 3. Verify expected outputs

# For web templates: Manual verification in browser
# 1. Open index.html in browser
# 2. Test all interactions
# 3. Check console for errors (F12)
```

## Working with Notebooks
```bash
# Convert notebook to Python script (if needed)
jupyter nbconvert --to script notebook.ipynb

# Note: This project uses Google Colab, so local Jupyter is optional
```

## Creating New Sessions
```bash
# Copy template for new session
cp -r estudiantes/templates/web_base estudiantes/templates/web_sessions/sXX

# Or use PowerShell on Windows
Copy-Item -Recurse estudiantes/templates/web_base estudiantes/templates/web_sessions/sXX
```

## Linting/Formatting
```bash
# No automated linting configured for this educational project
# Manual review following coding conventions is expected

# For JavaScript, if using:
npm install -g prettier
prettier --write estudiantes/templates/**/*.js
```

## Python Best Practices
```bash
# If using local Python (not Colab):
python -m py_compile script.py  # Syntax check
```

## Memory Bank Commands
When user says "update memory bank":
1. Review all memory-bank/*.md files
2. Update activeContext.md with recent work
3. Update progress.md with current status
4. Update tasks/_index.md with task statuses

## Serena Tools (Primary Workflow)
- `find_symbol`: Search code symbols by name
- `get_symbols_overview`: Get file structure overview
- `replace_content`: Edit files with regex
- `search_for_pattern`: Search codebase patterns
- `read_file`: Read file contents
