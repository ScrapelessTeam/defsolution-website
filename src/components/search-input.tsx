import { Search } from 'lucide-react';
import { combineClasses } from '@/lib/utils';
import { Input } from './ui/input';

interface SearchInputProps {
  placeholder: string;
  value: string;
  className?: string;
  onValueChange: (value: string) => void;
}

export default function SearchInput({ className, value, placeholder, onValueChange }: SearchInputProps) {
  return (
    <div className={combineClasses('relative', className)}>
      <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
      <Input placeholder={placeholder} className="pl-8" value={value} onChange={e => onValueChange(e.target.value)} />
    </div>
  );
}
