guard :shell do
  watch /templates.*/ do |m|
	`./build.sh`
  end
end

guard 'livereload' do
	watch(%r{.+.html})
	watch(%r{assets/css/.+\.css})
	watch(%r{assets/js/.+\.css})
	watch(%r{assets/fonts/.+\..+})
	watch(%r{assets/img/.+\..+})
	watch(%r{assets/img/icons/.+\..+})
end
