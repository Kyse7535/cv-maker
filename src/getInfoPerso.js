function GetInfoPerso(props) {
  let prenom = props.state.prenom;
  let nom = props.state.nom;

  return (
    <div
      className="text-left hover-border-blue cursor-pointer w-50"
      onClick={props.setIsChanging}
    >
      <h3>
        {prenom} {nom}
      </h3>
      <p className="my-0">{props.state.tel}</p>
      <p className="my-0">{props.state.adresse}</p>
    </div>
  );
}

export default GetInfoPerso;
