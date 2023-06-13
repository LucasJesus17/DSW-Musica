package br.senac.tads.dsw.musicas.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senac.tads.dsw.musicas.Model.Musica;
import br.senac.tads.dsw.musicas.Repository.MusicaRepository;
import br.senac.tads.dsw.musicas.Service.MusicaService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/musicas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MusicaController {
    
	@Autowired
	private MusicaService musicaService;

	@Autowired
	private MusicaRepository musicaRepository;


	@GetMapping("/all")
	public ResponseEntity<List<Musica>> getAll() {
		return ResponseEntity.ok(musicaRepository.findAll());
	}

	

	@PostMapping("/cadastrar")
	public ResponseEntity<Musica> postMusica(@Valid @RequestBody Musica musica) {
		return musicaService.cadastrarMusica(musica)
				.map(resposta -> ResponseEntity.status(HttpStatus.CREATED).body(resposta))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());

	}





}
