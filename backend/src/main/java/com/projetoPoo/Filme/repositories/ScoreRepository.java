package com.projetoPoo.Filme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoPoo.Filme.entities.Score;
import com.projetoPoo.Filme.entities.ScorePrimaryKey;

public interface ScoreRepository extends JpaRepository <Score, ScorePrimaryKey> {

	
}
