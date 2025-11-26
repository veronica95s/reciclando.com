package com.reciclando.app.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.reciclando.app.Repositories.UserRepository;
import com.reciclando.app.Models.User;


@RestController 
@RequestMapping("/api/users")
public class UserController {

    // Aqui vou precisar acessar o banco de dados através do Repository
    private final UserRepository userRepository;

    //O spring me dá o repository automaticamente (Injeção de dependência)

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    } 

    @GetMapping // GET em api/users
    public List<User> getAll(){
        //Pede para o repository buscar todos no banco 
        return userRepository.findAll();
    }
    
    @GetMapping("/{id}") // GET em api/users/{id}
    public User getById(@PathVariable Long id){
        return userRepository.findById(id).orElse(null);
    }

    //Criar um novo usuário 
    @PostMapping // POST em / api/users 
    public User create(@RequestBody User user){
        return userRepository.save(user);
    }

    // Atualizar um usuário
    @PutMapping("/{id}") // PUT em api/users/{id}
    public User update(@PathVariable Long id, @RequestBody User updateUser){
        //Busca o usuário com o esse id no banco de dados
        return userRepository.findById(id)
        .map(user -> {
            // Se encontrou, atualiza os campos
            user.setfullName(updateUser.getfullName());
            user.setEmail(updateUser.getEmail());
            user.setPhoneNumber(updateUser.getPhoneNumber());
            user.setPasswordHash(updateUser.getPasswordHash());
            user.setAccountType(updateUser.getAccountType());
            //Salva as mudana no banco 
            return userRepository.save(user);

        })
        .orElse(null); 
    
    }

    // Deletar um usuário
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        userRepository.deleteById(id);
    }





}

    
