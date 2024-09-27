import styled from 'styled-components';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Container = styled.div`
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 600px;
    justify-content: space-between;
  }
`;

const HomeDados = styled.div`
  width: 100%;
`;

const HomeContact = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  heigth: 100%;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 20%;
    heigth: 100%;
  }
`;

const Image = styled.img`
  width: 300px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerTarefas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabelaTarefas = styled.table`
  width: 100%;
  border: 1px solid;

  th, td {
    border: 1px solid;
  }
`;

const HomeInformacoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  heigth: 100%;
`;

function Home({ info }) {
  const { nome, data, setor, cargo, img } = info;

  return (
    <HomeContainer>
      <Image src={img} alt="" />
      <HomeInformacoes>
        <HomeDados>
          <h2>{nome}</h2>
          <p>Data de nascimento: {data}</p>
          <p>Setor: {setor}</p>
          <p>Cargo: {cargo}</p>
        </HomeDados>
        <HomeContact>
          <BsFillTelephoneFill size={25} />
          <MdEmail size={25} />
          <FaMapMarkerAlt size={25} />
        </HomeContact>
      </HomeInformacoes>
    </HomeContainer>
  );
}

export default function AT_08() {
  const info = {
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20230605/pngtree-bright-colors-is-poured-into-a-black-background-image_2885679.jpg',
    nome: 'ABC',
    data: '01/01/2001',
    setor: 'Administração',
    cargo: 'Gerente',
  };

  return (
    <Container>
      <Home info={info} />
      <ContainerTarefas>
        <TabelaTarefas>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Tarefas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="tarefa1" id="tarefa1" />
              </td>
              <td>Comprar mercadorias</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="tarefa2" id="tarefa2" />
              </td>
              <td>Limpar casa</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="tarefa3" id="tarefa3" />
              </td>
              <td>Caminhar</td>
            </tr>
          </tbody>
        </TabelaTarefas>
      </ContainerTarefas>
    </Container>
  );
}
