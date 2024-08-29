import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';

export default function MarkdownPreview({
  modelValue,
  editorId,
  className,
  previewTheme = 'default',
  language = 'en-US',
}: {
  editorId: string;
  modelValue: string;
  className?: string;
  previewTheme?: string;
  language?: string;
}) {
  return (
    <MdPreview
      editorId={editorId}
      modelValue={modelValue || ''}
      language={language}
      previewTheme={previewTheme}
      className={className}
    />
  );
}
