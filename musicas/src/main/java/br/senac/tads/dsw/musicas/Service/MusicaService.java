package br.senac.tads.dsw.musicas.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senac.tads.dsw.musicas.Model.Musica;
import br.senac.tads.dsw.musicas.Repository.MusicaRepository;

@Service
public class MusicaService {

    @Autowired
	private MusicaRepository musicaRepository;

    public Optional<Musica> cadastrarMusica(Musica musica) {

		return Optional.of(musicaRepository.save(musica));

	}
}
