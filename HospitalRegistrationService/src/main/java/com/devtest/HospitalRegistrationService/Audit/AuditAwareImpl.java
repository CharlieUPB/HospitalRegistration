package com.devtest.HospitalRegistrationService.Audit;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

@Component
public class AuditAwareImpl implements AuditorAware<String> {
	
	@Override
	public Optional<String> getCurrentAuditor() {
		return Optional.of("user01");
	}
}
