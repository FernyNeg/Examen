package examen.ciuddomi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("http://localhost:4200", "*").allowedMethods("*")
				.allowedHeaders("Content-Type", "x-requested-with", "X-Auth-Token", "authorization", "Auth", "COD_STATUS")
				.exposedHeaders("X-Auth-Token", "COD_STATUS").allowCredentials(false).maxAge(3600);
	}
}
