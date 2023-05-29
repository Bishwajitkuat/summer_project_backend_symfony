DROP DATABASE IF EXISTS summerProjectDB;
CREATE DATABASE summerProjectDB;
USE summerProjectDB;


CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230525151630', '2023-05-25 15:16:55', 24),
('DoctrineMigrations\\Version20230526185931', '2023-05-26 18:59:52', 35);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `keywords` json NOT NULL,
  `speakers` json NOT NULL,
  `participents` json NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `place`, `start_date`, `end_date`, `description`, `keywords`, `speakers`, `participents`, `created_at`, `updated_at`) VALUES
(2, 'updated', 'place test updated', '2023-05-26 18:38:18', '2023-05-26 18:38:18', 'description updated', '[]', '[{\"test\": \"test of object updated\"}, \"test2\"]', '[\"parti 1 updated\", \"parti 2\"]', '2023-05-26 15:06:44', '2023-05-26 18:38:18'),
(3, 'updated', 'place test updated', '2023-05-26 18:04:45', '2023-05-26 18:04:45', 'description updated', '[\"2\", \"test updated\"]', '[{\"test\": \"test of object updated\"}, \"test2\"]', '[\"parti 1 updated\", \"parti 2\"]', '2023-05-26 15:07:29', '2023-05-26 18:04:45'),
(4, 'kfdslfjdslkf', 'place test', '2023-05-26 15:09:00', '2023-05-26 15:09:00', 'description', '[\"2\", \"test\"]', '[\"test\", \"test2\"]', '[\"parti 1\", \"parti 2\"]', '2023-05-26 15:09:00', NULL),
(5, 'kfdslfjdslkf', 'place test', '2023-05-26 15:15:33', '2023-05-26 15:15:33', 'description', '[\"2\", \"test\"]', '[\"test\", \"test2\"]', '[\"parti 1\", \"parti 2\"]', '2023-05-26 15:15:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locatiion` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `image`, `locatiion`, `description`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', '2023-05-26 01:32:17', NULL),
(2, 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', '2023-05-26 20:00:01', NULL),
(3, 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', '2023-05-26 20:00:36', NULL),
(4, 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', '2023-05-26 20:00:48', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;
