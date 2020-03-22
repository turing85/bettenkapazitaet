package de.wirvsvirus.trackyourbed.dto.request;

import java.util.UUID;
import javax.validation.constraints.NotNull;

public class CreateNewWard {

  @NotNull(message = "attribute \"name\" must be set.")
  private String name;

  @NotNull(message = "attribute \"departmentId\" must be set.")
  private UUID departmentId;

  @NotNull(message = "attribute \"wardTypeName\" must be set.")
  private String wardTypeName;

  public String getName() {
    return name;
  }

  public void setName(final String name) {
    this.name = name;
  }

  public UUID getDepartmentId() {
    return departmentId;
  }

  public void setDepartmentId(final UUID departmentId) {
    this.departmentId = departmentId;
  }

  public String getWardTypeName() {
    return wardTypeName;
  }

  public void setWardTypeName(final String wardTypeName) {
    this.wardTypeName = wardTypeName;
  }
}