import { TbBeach } from "react-icons/tb";
import Container from "../Container";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label:'WindMills',
    icon:GiWindmill,
    description: "This property is close to windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
  }
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map(category => (
            <CategoryBox
                key={category.label}
                label={category.label}
                icon={category.icon}
                description={category.description}
            />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
