export default function useNavlinks() {
  const navlinks = ref([
    { name: "Home", href: "/" },
    { name: "Collections", href: "/about" },
    { name: "Shop", href: "/contact" },
    { name: "About", href: "/about" },
  ]);

  return { navlinks };
}
