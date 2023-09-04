package examen.ciuddomi.entity.models;

import java.util.List;

public class ConsultaList<T> {
	private String param;
	private List<T> list;

	public String getParam() {
		return param;
	}

	public void setParam(String param) {
		this.param = param;
	}

	public List<T> getList() {
		return list;
	}

	public void setList(List<T> list) {
		this.list = list;
	}

}
