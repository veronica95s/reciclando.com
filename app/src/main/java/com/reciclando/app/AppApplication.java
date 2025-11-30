package com.reciclando.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	
	/*
	@Bean
	CommandLineRunner seedData(
			PostRepository postRepo,
			DonorRepository donorRepo,
			RecyclerRepository recyclerRepo,
			AddressRepository addressRepo) {
		return args -> {

			// ADDRESS
			Address donorAddress = new Address("12345-678", "Sample City", "SC");
			addressRepo.save(donorAddress);
			Address recyclerAddress = new Address("98765-432", "Example Town", "ET");
			addressRepo.save(recyclerAddress);

			// DONOR
			User donorUser = new User("John", "Doe", "1234567890", AccountType.DONOR);
			donorUser.setAddress(donorAddress);
			Donor donor = new Donor(donorUser);

			// RECYCLER
			User recyclerUser = new User("Jane", "Smith", "0987654321", AccountType.RECYCLER);
			recyclerUser.setAddress(recyclerAddress);
			List<Material> materials = List.of(Material.PAPER, Material.PLASTIC);
			Recycler recycler = new Recycler(recyclerUser, materials);

			// POSTS
			Post post = new Post(
					"Old Newspaper",
					"Bundle of old newspapers available for recycling.",
					donor,
					Material.PAPER);
			post.setLocation(donorAddress);

			// Save to repositories
			donorRepo.save(donor);
			recyclerRepo.save(recycler);
			postRepo.save(post);
		};
	}
	*/
	
}