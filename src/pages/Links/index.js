import { useState, useEffect } from "react";
import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinksSave } from "../../services/storelinks";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@encurtaLink");
      if (result.lenght === 0) {
        console.log("Lista vazia");
      }
      setMyLinks(result);
    }
    getLinks();
  }, []);

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
        </Link>

        <h1>Meu links</h1>
      </div>
      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button className="link">
            <FiLink size={18} color="#FFF" />
            {link.long_url}
          </button>
          <button className="link-delete">
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      ))}
    </div>
  );
}
