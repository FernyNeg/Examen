package examen.ciuddomi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

@SpringBootApplication
@EntityScan(basePackages = { "examen.ciuddomi.entity" })
public class AppConfig extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(AppConfig.class, args);
	}
	
	@Bean
	public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> containerCustomizer() {
		return new Angular2PathLocationStrategyCustomizer();
	}

	private static class Angular2PathLocationStrategyCustomizer
			implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {
		@Override
		public void customize(ConfigurableServletWebServerFactory factory) {
			factory.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/"));
		}
	}

}
