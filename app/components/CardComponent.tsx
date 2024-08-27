
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

const CardComponent: React.FC<FeatureCardProps> = ({icon, title, description}) => {
  return (
    <div className=" rounded-lg p-6 flex flex-col items-center text-center shadow-lg bg-white bg-opacity-30 backdrop-blur-3xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  )
}

export default CardComponent;