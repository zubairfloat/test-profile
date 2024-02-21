import dynamic from "next/dynamic";
const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const PortFolio = () => {
  return <Work />
};

export default PortFolio;
