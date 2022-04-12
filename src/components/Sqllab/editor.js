export const parseEditorType = (editorType) => {
    switch (editorType) {
      case 'sql':
        return SQLEditor;
      case 'full-sql':
        return FullSQLEditor;
      case 'markdown':
        return MarkdownEditor;
      case 'text-area':
        return TextAreaEditor;
      case 'css':
        return CssEditor;
      case 'json':
        return JsonEditor;
      default:
        return ConfigEditor;
    }
};

export const SQLEditor = AsyncAceEditor([
    'mode/sql',
    'theme/github',
    'ext/language_tools',
  ]);

  export const FullSQLEditor = AsyncAceEditor([
    'mode/sql', 'theme/github', 'ext/language_tools'
   ]);

export const MarkdownEditor = AsyncAceEditor([
    'mode/markdown',
    'theme/textmate',
  ]);

  export const TextAreaEditor = AsyncAceEditor([
    'mode/markdown',
    'mode/sql',
    'mode/json',
    'mode/html',
    'mode/javascript',
    'theme/textmate',
  ]);

  export const CssEditor = AsyncAceEditor(['mode/css', 'theme/github']);

  export const JsonEditor = AsyncAceEditor(['mode/json', 'theme/github']);

  export const ConfigEditor = AsyncAceEditor([
    'mode/json',
    'mode/yaml',
    'theme/github',
  ]);
