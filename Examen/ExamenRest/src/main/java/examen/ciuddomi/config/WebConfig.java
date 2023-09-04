package examen.ciuddomi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import examen.ciuddomi.constantes.ConfigConstantes;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
						.allowedOrigins("http://localhost:4200", "*")
						.allowedMethods("*")
						.allowedHeaders(
								ConfigConstantes.HEADER_CONTET,
								ConfigConstantes.HEADER_RESQUESTWITH_KEY,
								ConfigConstantes.HEADER_TOKEN_AUT,
								ConfigConstantes.HEADER_AUTHORIZACION_KEY,
								ConfigConstantes.HEADER_AUTH_KEY,
								ConfigConstantes.HEADER_STATUS)
						.exposedHeaders(
								ConfigConstantes.HEADER_TOKEN_AUT,
								ConfigConstantes.HEADER_STATUS)
						.allowCredentials(false)
						.maxAge(3600);
	}
}
