import { InputGroup, InputGroupAddon, InputGroupInput } from '@shared/ui/input-group';

export const InputSearch = () => {
  return (
    <aside className="mb-4">
      <InputGroup className="focus-within:border-muted bg-white shadow-sm">
        <InputGroupInput
          className="placeholder:text-muted-foreground text-base outline-none"
          placeholder="Search..."
        />
        <InputGroupAddon>
          <img src="/img/search.svg" alt="Search" />
        </InputGroupAddon>
      </InputGroup>
    </aside>
  );
};
