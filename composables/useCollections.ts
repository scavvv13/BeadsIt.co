export default function useCollections() {
  const regularCollection = ref([
    { name: "blue", href: "/braceletblue.jpg" },
    { name: "orange", href: "/braceletorange.jpg" },
    { name: "green", href: "/braceletgreen.jpg" },
    { name: "purple", href: "/braceletpurple.jpg" },
    { name: "pink", href: "/braceletpink.jpg" },
    { name: "black", href: "/braceletblack.jpg" },
    { name: "white", href: "/braceletwhite.jpg" },
  ]);

  return { regularCollection };
}
