package co.g2academy.kelarin.repository;

import co.g2academy.kelarin.model.Project;
import co.g2academy.kelarin.model.TaskLog;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Ichsan S
 */
@Repository
public interface TaskLogRepository extends JpaRepository<TaskLog, Integer>{
    public List<TaskLog> findTaskLogByProject(Project project);
}
