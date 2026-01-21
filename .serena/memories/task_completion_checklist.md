# Task Completion Checklist - EstudIA-Programacion

## After Completing a Task

### For Python Notebooks (Sessions)
- [ ] All code cells run without errors
- [ ] Comments explain WHY, not WHAT
- [ ] Spanish language throughout
- [ ] Emojis used for section headers (🎯, 📚, etc.)
- [ ] Examples follow progressive disclosure
- [ ] Checklist de apertura included
- [ ] Objetivos de sesión clearly stated
- [ ] Ejercicios practicos included

### For Web Templates (Sessions)
- [ ] Follows pattern: State → Pure Functions → Render → Events
- [ ] Only changes what's necessary from base template
- [ ] IDs are semantic and descriptive
- [ ] JavaScript uses `const` by default, `let` when needed
- [ ] Event handlers are minimal (read + update state + render)
- [ ] CSS classes follow session-specific patterns
- [ ] Spanish language in UI text

### For General Code Changes
- [ ] Code is self-documenting (good naming)
- [ ] No redundant comments
- [ ] No commented-out code
- [ ] Follows existing project patterns
- [ ] Git commit with descriptive message

## Verification Steps

### Manual Testing (Python)
1. Open notebook in Google Colab
2. Run "Run all" from Runtime menu
3. Verify all cells produce expected output
4. Check for any errors in execution

### Manual Testing (Web)
1. Open index.html in browser
2. Test all interactive elements
3. Open DevTools (F12) and check Console for errors
4. Verify CSS styles are applied correctly

## Before Committing
- [ ] Git status shows only expected changes
- [ ] Commit message follows format: "descripcion del cambio"
- [ ] No sensitive or temporary files included
- [ ] Material is appropriate for target audience level

## Special Considerations

### Educational Content
- Maintain appropriate difficulty level for beginners
- Include bridge between Python and JavaScript concepts when relevant
- Use practical, relatable examples
- Encourage experimentation and exploration

### File Ignored Paths
Note: Some directories are ignored by Serena (.gitignore):
- `memory-bank/` - Contains project documentation
- `profesor/recursos_privados/` - Private teacher resources
- `estudiantes/assignments/` - Student evaluations

When working in these areas, use standard file operations instead of Serena tools.
