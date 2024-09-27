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
  width: 300px;
`;

const HomeContact = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-evenly;
`;

const TabelaTarefas = styled.table`
  width: 100%;
  border: 1px solid;

  th, td {
    border: 1px solid;
  }
`;

const ContainerTarefas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home({ info }) {
  const { nome, data, setor, cargo, img } = info;

  return (
    <HomeContainer>
      <img src={img} alt="" />
      <div>
        <div>
          <h2>{nome}</h2>
          <p>Data de nascimento: {data}</p>
          <p>Setor: {setor}</p>
          <p>Cargo: {cargo}</p>
        </div>
        <HomeContact>
          <BsFillTelephoneFill size={25} />
          <MdEmail size={25} />
          <FaMapMarkerAlt size={25} />
        </HomeContact>
      </div>
    </HomeContainer>
  );
}

export default function AT_07() {
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
