package br.senac.tads.dsw.musicas.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.senac.tads.dsw.musicas.Model.Musica;




@Repository
public interface MusicaRepository extends JpaRepository<Musica, Long> {


}