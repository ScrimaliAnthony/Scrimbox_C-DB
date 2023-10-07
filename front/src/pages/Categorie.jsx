import { CategorieNvP } from "../component/CategorieNvP";
import { useEffect, useState } from "react";

export function Categorie() {
    const [ id_nv1, setId_nv1 ] = useState(null);
    const [ id_nv2, setId_nv2 ] = useState(null);
    const [ id_nv3, setId_nv3 ] = useState(null);
    const [ id_nv4, setId_nv4 ] = useState(null);
    const [ id_nv5, setId_nv5 ] = useState(null);
    const [ id_nv6, setId_nv6 ] = useState(null);
    const [ id_nv7, setId_nv7 ] = useState(null);
  
    useEffect(() => {
      if (id_nv2 === null) {
        setId_nv3(null);
        setId_nv4(null);
        setId_nv5(null);
        setId_nv6(null);
      } else if (id_nv3 === null) {
        setId_nv4(null);
        setId_nv5(null);
        setId_nv6(null);
      } else if (id_nv4 === null) {
        setId_nv4(null);
        setId_nv5(null);
        setId_nv6(null);
      } else if (id_nv5 === null) {
        setId_nv5(null);
        setId_nv6(null);
      }
  }, [id_nv1, id_nv2, id_nv3, id_nv4, id_nv5, id_nv6]);
  
    return (
        <>
            <CategorieNvP                       usage={1}                 id_nvN={id_nv1} setId_nvN={setId_nv1} id_nvS={id_nv2} setId_nvS={setId_nv2} />
            {id_nv1 && <CategorieNvP usageP={1} usage={2} id_nvP={id_nv1} id_nvN={id_nv2} setId_nvN={setId_nv2} id_nvS={id_nv3} setId_nvS={setId_nv3} />}
            {id_nv2 && <CategorieNvP usageP={2} usage={3} id_nvP={id_nv2} id_nvN={id_nv3} setId_nvN={setId_nv3} id_nvS={id_nv4} setId_nvS={setId_nv4} />}
            {id_nv3 && <CategorieNvP usageP={3} usage={4} id_nvP={id_nv3} id_nvN={id_nv4} setId_nvN={setId_nv4} id_nvS={id_nv5} setId_nvS={setId_nv5} />}
            {id_nv4 && <CategorieNvP usageP={4} usage={5} id_nvP={id_nv4} id_nvN={id_nv5} setId_nvN={setId_nv5} id_nvS={id_nv6} setId_nvS={setId_nv6} />}
            {id_nv5 && <CategorieNvP usageP={5} usage={6} id_nvP={id_nv5} id_nvN={id_nv6} setId_nvN={setId_nv6} id_nvS={id_nv7} setId_nvS={setId_nv7} />}
        </>
    )
}