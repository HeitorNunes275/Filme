package com.projetoPoo.Filme.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoPoo.Filme.entities.User;

public interface UserRepository extends JpaRepository <User, Long> {

	User findByEmail(String email);
}
