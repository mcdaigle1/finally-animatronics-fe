type LeftNavProps = {
  selectedNavItem: string;
  onSelectNavItem: (item: string) => void;
};

function LeftNav({ selectedNavItem, onSelectNavItem }: LeftNavProps) {
  const leftNavItems = [
    { id: "home", name: "Home" },
    { id: "account", name: "Account" },
    { id: "settings", name: "Settings" }
  ];

  return (
    <ul className="nav flex-column">
      {leftNavItems.map(item => (
        <li key={item.id} className="nav-item">
          <button
            type="button"
            className={
              item.id === selectedNavItem
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onSelectNavItem(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LeftNav;