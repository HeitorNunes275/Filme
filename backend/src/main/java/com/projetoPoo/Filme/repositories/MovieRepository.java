package com.projetoPoo.Filme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projetoPoo.Filme.entities.Movie;

public interface MovieRepository extends JpaRepository <Movie, Long> {

	
}
