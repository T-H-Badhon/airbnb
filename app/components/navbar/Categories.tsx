import { TbBeach } from "react-icons/tb";
import Container from "../Container";
import { GiBroom, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { useParams, usePathname } from "next/navigation";

export const categories = [
  {
    label: "room",
    icon: GiBroom,
    description: "This property is close to the beach",
  },
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
    description: "This property is close to Modern",
  }
];

const Categories = () => {
    const params = useParams();
    const name = params?.name
    // console.log(category)
    const pathName = usePathname();

    const isMainPage = pathName === '/';

    if(!isMainPage){
        return null;
    }
  return (
    <Container>
      <div className="pt-4  flex flex-row items-center justify-between overflow-x-auto">
        {categories.map(item => (
            <CategoryBox
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={name === item.label}
                description={item.description}
               
            />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
